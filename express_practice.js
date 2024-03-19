const express = require('express');
const router = express.Router();

router.all('/scret', (req, res, next) => {
    console.log('Accessing the scret section....');
    next();
})

router.get('/example/a', (req, res) => {
    res.send('Hello from A!')
})

router.get('/example/b/:id', (req, res, next) => {
    console.log('the response will be sent by the next function...')
    if(req?.params?.id) {
        next()
    } else {
        console.log("response params is not availables")
    }
    // res.send('Hello from A!')
}, (req,res) => {
    console.log(req?.params)
    res.send('Hello from B!')
})

const c0 = function (req,res,next) {
    console.log('cO');
    next()
}

const c2 = function (req,res,next) {
    console.log('c2');
    next()
}

const c1 = function (req,res,next) {
    console.log('c1');
    next()
}

router.get('/example/c', [c0,c1,c2])

const cd0 = function (req,res,next) {
    console.log('cd0');
    next();
}

const cd1 = function (req,res,next) {
    console.log('Hello cd!')
    // res.send('Hello CD1')
    next();
}

router.get('/example/d', [cd0, cd1], (req, res, next) => {
    // console.log('log cd1', cd1);
    console.log('first of all line no 54');
    next();
}, (req, res) => {
    res.send('Hello D!')
})


router.route('/book').get((req,res) => {
    res.send('Get Books')
}).post((req,res) => {
    res.send('Add Books')
}).put((req,res) => {
    res.send('Put Book')
})
module.exports = router