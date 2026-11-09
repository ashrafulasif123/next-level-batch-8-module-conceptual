//* Literal Type
type Status = string
let status: Status = "pending"



//* Basic Union
type Identity = string | number
const id: Identity = 24564

//*Literal Union
type Role = "user" | "admin" | "manager"
const userRole: Role = "admin"

// Object Union
type Admin = { id: number, role: "admin", privileges: string[] }
type Member = { id: number, role: "member", plans: [] }

type User = Admin | Member
const user: User = { id: 124, role: "member", plans: [] }

