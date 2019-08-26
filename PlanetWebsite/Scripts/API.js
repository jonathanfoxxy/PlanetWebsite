exports.handler = async (event) => {
    if (event.httpMethod == 'GET') {
        return getPlanets(event);

    }
};

const getPlanets = event => {

    var params = {
        planet: [{
            name: 'Earth',
            distanceFrom: '13414'
        },
        {
            name: 'Mars',
            distanceFrom: '134147484844'
        },
        {
            name: 'Venus',
            distanceFrom: '13413442424'
        },
        {
            name: 'Jupiter',
            distanceFrom: '1341472453692472'
        },
        {
            name: 'Mecury',
            distanceFrom: '52525252'
        },
        {
            name: 'Saturn',
            distanceFrom: '5292925828525'
        },
        {
            name: 'Uranus',
            distanceFrom: '92794629462264'
        },
        {
            name: 'Neptune',
            distanceFrom: '92842984729469264'
        }
        ]

    };
    return {
        statusCode: 200,
        body: JSON.stringify(params)
    };

};