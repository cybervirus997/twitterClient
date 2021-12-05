import React from 'react'
import Card from "./Card"
import {CovidData} from "./news/Covid"
import {SportsData} from "./news/Sports"
import {TechnologyData} from "./news/Technology"
import {BusinessData} from "./news/Business"
import {PoliticsData} from "./news/Politics"
import SportsPic from "./images/Sports.jpeg"
import CovidPic from "./images/covid.jpeg"
import PoliticsPic from "./images/Politics.jpeg"
import TechnologyPic from "./images/technology.jpeg"
import BusinessPic from "./images/business.jpeg"


const Covid = () => {
  return (
    <div>
      <img src={CovidPic} style={{width: '100%',height:"350px"}} alt="img" />

    {CovidData.map(item => {
      return <Card {...item} />
    })}
    </div>
  )
}

const Technology = () => {
  return (
    <div>
      <img src={TechnologyPic} style={{width: '100%',height:"350px"}} alt="img" />

    {TechnologyData.map(item => {
      return <Card {...item} />
    })}
    </div>
  )
}

const Business = () => {
    
  return (
    <div>
      <img src={BusinessPic} style={{width: '100%',height:"350px"}} alt="img" />

    {BusinessData.map(item => {
      return <Card {...item} />
    })}
    </div>
  )
}

const Sports = () => {
   return (
      <div>
        <img src={SportsPic} style={{width: '100%',height:"350px"}} alt="img" />

      {SportsData.map(item => {
        return <Card {...item} />
      })}
      </div>
    )

}

const Politics = () => {
  return (
    <div>
      <img src={PoliticsPic} style={{width: '100%',height:"350px"}} alt="img" />

    {PoliticsData.map(item => {
      return <Card {...item} />
    })}
    </div>
  )
}
export {Covid,Technology,Business,Sports,Politics} 
