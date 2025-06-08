export const getUsers = (req, res) => {
    console.log("It works");
    try {

    } catch (error) {
        console.log(err);
        res.status(500).json({ message: "Failed to get users" });
    }
}

export const getUser = (req, res) => {
    try {

    } catch (error) {
        console.log(err);
        res.status(500).json({ message: "Failed to get user" });
    }
}

export const updategetUser = (req, res) => {
    try {

    } catch (error) {
        console.log(err);
        res.status(500).json({ message: "Failed to update users" });
    }
}

export const deleteUsers = (req, res) => {
    try {

    } catch (error) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete users" });
    }
}