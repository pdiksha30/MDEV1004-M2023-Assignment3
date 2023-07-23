/*
File: index.ts
Student Name: Diksha patel , Namrata Savaliya
StudentId: 200540067, 200548688
Date: July 23, 2023
 */
import express from 'express';
let router = express.Router();
import passport from 'passport';

/* GET the movie controller */
import {DisplayMovieList, DisplayMovieByID, AddMovie, updateMovie, DeleteMovie, ProcessRegister, ProcessLogin, ProcessLogout } from '../Controllers/movie';


router.get('/',function(req, res, next)
{
   res.render('index', {title: 'Express' });
});


router.get('/list', function(req, res, next)
{
  DisplayMovieList(req, res, next);
});

router.get('/find/:id', function(req, res, next){
       DisplayMovieByID(req, res, next);
});

router.post('/add', passport.authenticate('jwt', {session: false}) , function(req, res, next){
  AddMovie(req, res, next);
})


router.put('/update/:id',passport.authenticate('jwt', {session: false}),  function(req, res, next){
  updateMovie(req, res, next);
})

router.delete('/delete/:id',passport.authenticate('jwt', {session: false}),  function(req, res, next)
{
  DeleteMovie(req, res, next);
})

router.post('/register', function(req, res, next)
{
  ProcessRegister(req, res,next);
})
router.post('/login', function(req, res, next){
  ProcessLogin(req, res, next);
});

router.get('/logout', function(req, res, next){
  ProcessLogout(req, res, next);
});
export default router;
