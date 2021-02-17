
const { assert } = require('chai');

const{expect} = require('chai');

class ChristmasMovies {
    constructor() {
        this.movieCollection = [];
        this.watched = {};
        this.actors = [];
    }

    buyMovie(movieName, actors) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        let uniqueActors = new Set(actors);

        if (movie === undefined) {
            this.movieCollection.push({ name: movieName, actors: [...uniqueActors] });
            let output = [];
            [...uniqueActors].map(actor => output.push(actor));
            return `You just got ${movieName} to your collection in which ${output.join(', ')} are taking part!`;
        } else {
            throw new Error(`You already own ${movieName} in your collection!`);
        }
    }

    discardMovie(movieName) {
        let filtered = this.movieCollection.filter(x => x.name === movieName)

        if (filtered.length === 0) {
            throw new Error(`${movieName} is not at your collection!`);
        }
        let index = this.movieCollection.findIndex(m => m.name === movieName);
        this.movieCollection.splice(index, 1);
        let { name, _ } = filtered[0];
        if (this.watched.hasOwnProperty(name)) {
            delete this.watched[name];
            return `You just threw away ${name}!`;
        } else {
            throw new Error(`${movieName} is not watched!`);
        }

    }

    watchMovie(movieName) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        if (movie) {
            if (!this.watched.hasOwnProperty(movie.name)) {
                this.watched[movie.name] = 1;
            } else {
                this.watched[movie.name]++;
            }
        } else {
            throw new Error('No such movie in your collection!');
        }
    }

    favouriteMovie() {
        let favourite = Object.entries(this.watched).sort((a, b) => b[1] - a[1]);
        if (favourite.length > 0) {
            return `Your favourite movie is ${favourite[0][0]} and you have watched it ${favourite[0][1]} times!`;
        } else {
            throw new Error('You have not watched a movie yet this year!');
        }
    }

    mostStarredActor() {
        let mostStarred = {};
        if (this.movieCollection.length > 0) {
            this.movieCollection.forEach(el => {
                let { _, actors } = el;
                actors.forEach(actor => {
                    if (mostStarred.hasOwnProperty(actor)) {
                        mostStarred[actor]++;
                    } else {
                        mostStarred[actor] = 1;
                    }
                })
            });
            let theActor = Object.entries(mostStarred).sort((a, b) => b[1] - a[1]);
            return `The most starred actor is ${theActor[0][0]} and starred in ${theActor[0][1]} movies!`;
        } else {
            throw new Error('You have not watched a movie yet this year!')
        }
    }
}

let christmas = new ChristmasMovies();
christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
christmas.watchMovie('Home Alone');
christmas.watchMovie('Home Alone');
christmas.watchMovie('Home Alone');
christmas.watchMovie('Home Alone 2');
christmas.watchMovie('The Grinch');
christmas.watchMovie('Last Christmas');
christmas.watchMovie('Home Alone 2');
christmas.watchMovie('Last Christmas');
christmas.discardMovie('The Grinch');
christmas.favouriteMovie();
christmas.mostStarredActor();

module.exports = ChristmasMovies;


describe('tests at ChristamsMovie class', function() {
	let cm;
	this.beforeEach(function() {
		cm = new ChristmasMovies();
	})
	describe('tests all initial properties', function() {
		//test 1
		it('Instantiation with no parameters', function() {
			expect(cm.movieCollection).to.eql([]);
			expect(cm.movieCollection.length).to.deep.equal(0);
			expect(cm.watched).to.eql({});
			expect(cm.actors).to.deep.equal([]);
			expect(cm.actors.length).to.deep.equal(0);
		});
	});
 
	describe('tests function buyMovie', function() {
		// test 2
		it('should return added corectly a movie', function() {
			expect(cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
			.to.equal('You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
		});
 
		it('should thrown error that exist a movie name', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			expect(() => cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
			.to.throw(Error, 'You already own Last Christmas in your collection!');
		});
	});
 
	describe('tests function discardMovie', function() {
		it('should throw error that no exist movie name', function() {
			expect(() => cm.discardMovie('The Grunch')).to.throw(Error, 'The Grunch is not at your collection!');
		});
 
		it('should throw error that no exist movie watch', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			expect(() => cm.discardMovie('Last Christmas')).to.throw(Error, 'Last Christmas is not watched!');
		});
 
		it('should return message that correctly remove a movie', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			cm.watchMovie('Last Christmas');
			expect(cm.discardMovie('Last Christmas')).to.equal('You just threw away Last Christmas!');
		});
	});
 
	describe('tests function watchMovie', function() {
		it('should throw error that no exist in collection list this a movie name', function() {
			expect(()=> cm.watchMovie('The Grunch')).to.throw(Error, 'No such movie in your collection!');
		});
 
		it('should return three watched a movie', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Last Christmas');
			expect(cm.watched['Last Christmas']).to.deep.equal(3);
		});
	});
 
	describe('tests function favouriteMovie', function() {
		it('should thtow error that empty watched collection', function() {
			expect(() => cm.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
		});
 
		it('should return a movie with the most watched', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Home Alone');
			expect(cm.favouriteMovie()).to.equal('Your favourite movie is Last Christmas and you have watched it 3 times!');
		});
	});
 
	describe('tests function mostStarredActors', function() {
		//test 11
		it('should throw error that empty movieCollection', function() {
			expect(() => cm.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
		});
		//test 10
		it('should return the most played actor  in the movies', function() {
			cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			cm.buyMovie('Home Alone 2', ['Macaulay Culkin']);
			cm.buyMovie('Home Alone 3', ['Macaulay Culkin', 'Emma Thompson']);
			cm.watchMovie('Home Alone');
			expect(cm.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 3 movies!');
 
		});
	});
});