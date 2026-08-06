import '../css/main.css'
import './mode'
import request from './request'
import {createCountrieInfo} from './updateUI'

const querySting = window.location.search 
const urlParams = new URLSearchParams(querySting)
const country = urlParams.get('country')
