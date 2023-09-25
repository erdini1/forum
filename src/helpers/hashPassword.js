import bcrypt from "bcrypt"

const saltRound = 10

export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRound)
        return hashedPassword
    } catch (error) {
        throw error
    }
}

export const comparePassword = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword)
        return match
    } catch (error) {
        throw error
    }
}