import { NextRequest, NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import bcrypt from "bcryptjs";
import path from "path";

const dbPath = path.join(process.cwd(), "database.db");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password, firstName, lastName } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const db = new sqlite3.Database(dbPath);

    return new Promise((resolve) => {
      db.run(
        `INSERT INTO users (username, email, password, firstName, lastName) 
         VALUES (?, ?, ?, ?, ?)`,
        [username, email, hashedPassword, firstName, lastName],
        async function (err) {
          if (err) {
            db.close();
            resolve(
              NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
              )
            );
            return;
          }

          const userId = this.lastID;
          await setAuthToken(userId);

          db.close();
          resolve(
            NextResponse.json(
              { message: "User created successfully", userId },
              { status: 201 }
            )
          );
        }
      );
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
