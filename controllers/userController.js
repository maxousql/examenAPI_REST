exports.getUsers = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id: '1',
                name: 'LAI YIO LAI TONG',
                firstname: 'Maxime',
                content: 'Utilisateur de base',
                ecole: 'ESGI',
                creator: {
                    name: 'Sciences-u'
                },
                createdAt: new Date()
            }
        ]
    });
};

exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const firstname = req.body.firstname;
    res.status(201).json({
        message: 'Post created successfully!',
        user: { id: new Date().toISOString(), name: name, firstname: contfirstnameent }
    });
};
