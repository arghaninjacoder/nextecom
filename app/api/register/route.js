import User from "@/models/user"
import dbConnect from "@/utils/dbConnect"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function POST(req) {
  await dbConnect()

  const { name, email, password } = await req.json()

  try {
    const user = await new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    }).save()

    console.log("User created => ", user)

    return NextResponse.json(user)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ err: error.message }, { status: 500 })
  }
}
