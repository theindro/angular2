import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {
                id: 1,
                name: 'Titanic',
                desc: 'Film jutustab loo luksusauriku Titanic ainsast reisist Euroopast Ameerika Ühendriikidesse 1912. aasta kevadel. Peaosades on Leonardo DiCaprio (Jack Dawson) ja Kate Winslet (Rose DeWitt Bukater).',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDNiMjE0NDgtZWRhNC00YTlhLTk2ZjItZTQzNTU2NjAzNWNkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 2,
                name: 'Deadpool',
                desc: 'Deadpool on Marveli universumi kõige omapärasem antikangelane, endine eriväelane ja palgasõdur Wade Wilson (Ryan Reynolds), kellel diagnoositakse vähk. Kuna tal pole midagi kaotada, liitub mees äärmusliku eksperimendiga, mille tulemusel omandab kiire paranemisvõime ja võtab kasutusele alter ego Deadpool. Relvastatuna oma uute võimete ning erakordselt väärastunud huumorimeelega, asub Deadpool jahtima meest, kes oleks ta elu peaaegu täielikult hävitanud.',
                pilt: 'http://i.imgur.com/g7YeJYQ.jpg'
            },
            {
                id: 3,
                name: 'Captain America: Civil War',
                desc: 'test',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 4,
                name: 'Storks',
                desc: 'test',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNjI3MzcwMF5BMl5BanBnXkFtZTgwOTIyNDY5OTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 5,
                name: 'The 5th Wave',
                desc: 'test',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 6,
                name: 'Suicide Squad',
                desc: 'test',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 7,
                name: 'Independence Day: Resurgence',
                desc: 'test',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMTg5MTg4OV5BMl5BanBnXkFtZTgwMzkzMjY5NzE@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 8,
                name: 'Batman v Superman: Dawn of Justice',
                desc: 'test',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 9,
                name: 'Star Trek Beyond',
                desc: 'test',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODgzN2E1YjctODg5Yi00YzYwLWJjZjAtNDg2MGE2Y2MyYjBmXkEyXkFqcGdeQXVyNjM1MTQ0NTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 10,
                name: 'The Legend of Tarzan',
                desc: 'test',
                pilt: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzY3OTI0OTcyMF5BMl5BanBnXkFtZTgwNjkxNTAwOTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
            }
        ];
        return {heroes};
    }
}
