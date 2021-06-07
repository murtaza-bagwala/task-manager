# Task Manager :notebook:

## Project Overview

This project showcase how a Task Manager app works. It allows users to add and keep track of all of his tasks.

## Motivation :man_technologist:

This project demonstrates how RoR and React can be used for Rapid Application Development(RAD).

Redux can be used as a state management tool along with React to build complex and scalable UI.

I will be using Redux for state management. I think Redux is a great choice here because it is simple, its core idea is that the whole state of the app is contained in one central location. You just need to define Action Types, Pure Reducers and Store thats it. Also, its very easy to maintain, to debug and to test.

As I am a strong proponent of immutability, I really like Redux Pure Reducer functions because, it makes states more predictable, pure functions change no values, they have no influence on the context or any measurable side effect. If the same state and action are passed on to a reducer, then the same result is generated.

## How it works

### Logged in User :unlock:

- User should be able to Login/Signup.
- User should be able to add the tasks.
- User should be able to set the deadline for the task.
- User should be able to add the comments to the task.
- User should be able to add the attachements to the task.
- User should be able to delete the task.
- User should be able to filter the task based on the (complete/incomplete) status
- User should be able to logout

## Tech Stack

### Backend

We will be using RoR for authentication and to create the APIs along with postgres as database. I will update the DB models once it is finalized.

### Frontend

- React
- Redux for state management
- Material ui or plain CSS for UI
- Jest/Enzyme as Test libraries
