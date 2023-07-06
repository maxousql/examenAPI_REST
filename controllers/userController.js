exports.getUsers = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                id: '1',
                name: 'LAI YIO LAI TONG',
                firstname: 'Maxime',

            }
        ]
    });
};

exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const firstname = req.body.firstname;
    const id = req.body.id;
    res.status(201).json({
        message: 'Utilisateur ajouté ! GG',
        user: { id: id, name: name, firstname: firstname }
    });
};
