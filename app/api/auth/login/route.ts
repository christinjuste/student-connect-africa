import { NextRequest, NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import bcrypt from "bcryptjs";
import path from "path";

const dbPath = path.join(process.cwd(), "database.db");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = new sqlite3.Database(dbPath);

    return new Promise((resolve) => {
      db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user: any) => {
        if (err || !user) {
          db.close();
          resolve(
            NextResponse.json(
              { error: "Invalid credentials" },
              { status: 401 }
            )
          );
          return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          db.close();
          resolve(
            NextResponse.json(
              { error: "Invalid credentials" },
              { status: 401 }
            )
          );
          return;
        }

        await setAuthToken(user.id);
        db.close();

        resolve(
          NextResponse.json(
            { message: "Login successful", userId: user.id },
            { status: 200 }
          )
        );
      });
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
