let full = 8;

if (full == 1) {
  console.log("eat pizza");
}
if (full == 2) {
  console.log("eat pizza");
}
if (full == 3) {
  console.log("eat pizza");
}

if (full == 4) {
  console.log("eat salad");
}
if (full == 5) {
  console.log("eat salad");
}
if (full == 6) {
  console.log("eat salad");
}
if (full == 7) {
  console.log("eat salad");
}

if (full == 8) {
  console.log("eat air");
}
if (full == 9) {
  console.log("eat air");
}
if (full == 10) {
  console.log("eat air");
}

if (1 <= full && full <= 3) {
  console.log("eat pizza");
} else if (3 < full && full <= 7) {
  console.log("eat salad");
} else {
  console.log("eat air");
}

switch (full) {
  case 1:
  case 2:
  case 3:
    console.log("eat pizza");
    break;
  case 4:
  case 5:
  case 6:
  case 7:
    console.log("eat salad");
    break;
  case 8:
  case 9:
  case 10:
    console.log("eat air");
}

function getCloseBracket_if(openBracket: string): string {
  if (openBracket == "(") {
    return ")";
  }
  if (openBracket == "[") {
    return "]";
  }
  if (openBracket == "{") {
    return "}";
  }
  throw new Error("unknown bracket");
}

function getCloseBracket_case(openBracket: string): string {
  // prettier-ignore
  switch (openBracket) {
    case "(": return ")";
    case "[": return "]";
    case "{": return "}";
    default: throw new Error("unknown bracket");
  }
}

function login(user: { username: string; password: string }) {
  if (user.username.length < 6) {
    throw new Error("username should be at least 6 chars");
  }
  if (user.password.length < 8) {
    throw new Error("password should be at least 8 chars");
  }
}
