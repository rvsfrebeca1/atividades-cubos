const email = ".messias@cubos";

if (email.includes("@") && email.includes(".")) {

  if (email[0] === "." || email[email.length - 1] === ".") {
    console.log("Email inválido")

  } else {
    console.log("Email válido")
  }




} else {
  console.log("Email inválido")
}