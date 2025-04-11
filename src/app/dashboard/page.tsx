"use client";
import { signout } from "../actions/auth";

export default function Page() {
    return (
      <div>
            <p>dashboard</p>
            <button onClick={() => signout()}>Sign Out</button>
      </div>
    );
}