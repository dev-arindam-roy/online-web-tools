import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from "../pages/Home";

import PasswordGenerator from "../pages/password-generator"
import RandomStringGenerator from "../pages/random-string-generator"
import HashKeyGenerator from "../pages/hash-key-generator"

const AppRoute = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/password-generator" element={<PasswordGenerator />}></Route>
            <Route path="/random-string-generator" element={<RandomStringGenerator />}></Route>
            <Route path="/hash-key-generator" element={<HashKeyGenerator />}></Route>
        </Routes>
    </>
  )
}

export default AppRoute