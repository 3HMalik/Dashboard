const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "https://api.unsplash.com/search/photos?client_id=????????????????????????????????????";
const baseUrll = "http://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=9389fbd883f0884729b80b6c85be1fbb";
const baselink1 = "http://api.openweathermap.org/data/2.5/weather?q=";
const baselink2 = "&units=imperial&appid=9389fbd883f0884729b80b6c85be1fbb";

const util = require("util");

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=1' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 1 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=3' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 2 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=2' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 3 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=4' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 4 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=5' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 5 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=6' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 6 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=7' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 7 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=8' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 8 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=9' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 9 for Unsplash service succeed");
                done();
            });
    });
});

describe('call unsplash API, testing ./routes/stories route', function() {
    it('should returns all the informations that concern the unsplash photo', function(done) {
        request.get({ url: baseUrl + 'wolf&page=10' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.results[1].urls.small).to.be.a('string');
            		expect(bodyObj.results[1].user.name).to.be.a('string');
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 10 for Unsplash service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baseUrll },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'paris' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 2 for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'alger' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 3 for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'toulouse' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 4 for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'tokyo' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 5 for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'tanger' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 6 for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'marseille' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 7 for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'lyon' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 8 for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'seoul' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 9 for weather service succeed");
                done();
            });
    });
});

describe('call weather API, testing ./routes/weather route', function() {
    it('should returns all the informations that concern the city weather', function(done) {
        request.get({ url: baselink1 + 'nancy' + baselink2},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.weather[0].icon).to.be.a('string');
            		expect(bodyObj.weather[0].description).to.be.a('string');
                    should.exist(bodyObj.main.temp);
                    should.exist(body);
                    expect(response.statusCode).to.equal(200);
                    console.log("Test number 10 for weather service succeed");
                done();
            });
    });
});