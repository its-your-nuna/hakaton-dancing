import React from 'react'
import './people.scss'

import sound1 from '../../ogg/coeur1_oaaah_a.ogg'
import sound2 from '../../ogg/melo3_siffle_a.ogg'
import sound3 from '../../ogg/beat1_boom_a.ogg'
import sound4 from '../../ogg/melo5_tvutvutvu_a.ogg'
import sound5 from '../../ogg/coeur2_cougou_a.ogg'
import sound6 from '../../ogg/beat3_paomeu_a.ogg'
import sound7 from '../../ogg/effet1_poulll_b.ogg'
import { useState } from 'react'
import { data } from './data'
import { useEffect } from 'react'

export const People = () => {

  const [songId, setSongId] = useState()
  const [songId2, setSong1Id] = useState()
  const [songId3, setSong2Id] = useState()
  const [songId4, setSong3Id] = useState()
  const [songId5, setSong4Id] = useState()
  const [songId6, setSong5Id] = useState()
  const [songId7, setSong6Id] = useState()
  const [music, setMusic, ] = useState()
  let sound = new Audio(music)


  const start = (e) => {
    sound.play();
  }

  sound.addEventListener('ended', function () {
    start()
  });

  useEffect(() => {
    start()
    sound.addEventListener('ended', function () {
      start()
    });
  
  }, [music])



  return (
    <>
      <div className='buttons'>
        <a id='1' onClick={(e) => {
           setMusic(sound1)
          start(e)
          setSongId(1)
          var link = document.getElementById("1");
          link.textContent = "Done";
        }} href="#" className="discoBtn">1</a>
        <a id='2' onClick={() => {
          start()
          setSong1Id(2)
          setMusic(sound2)
          var link = document.getElementById("2");
          link.textContent = "Done";
        }} href="#" className="discoBtn">2</a>
        <a id='3'  onClick={() => {
          start()
          setSong2Id(3)
          setMusic(sound3)
          var link = document.getElementById("3");
          link.textContent = "Done";
        }} href="#" className="discoBtn">3</a>
        <a id='4'  onClick={() => {
          start()
          setSong3Id(4)
          setMusic(sound4)
          var link = document.getElementById("4");
          link.textContent = "Done";
        }} href="#" className="discoBtn">4</a>
        <a id='5'  onClick={() => {
          start()
          setSong4Id(5)
          setMusic(sound5)
          var link = document.getElementById("5");
          link.textContent = "Done";
        }} href="#" className="discoBtn">5</a>
        <a id='6'  onClick={() => {
          start()
          setSong5Id(6)
          setMusic(sound6)
          var link = document.getElementById("6");
          link.textContent = "Done";
        }} href="#" className="discoBtn">6</a>
        <a id='7'  onClick={() => {
          start()
          setSong6Id(7)
          setMusic(sound7)
          var link = document.getElementById("7");
          link.textContent = "Done";
        }} href="#" className="discoBtn">7</a>
      </div>
      {data.map((data, index) => {
        const { id, gif, jpeg, style } = data
        return <div key={id}>
          <img className='images' style={style} src={(id === songId ||
            id === songId2
            || id === songId3
            || id === songId4
            || id === songId5
            || id === songId6
            || id === songId7) ? gif : jpeg} alt='images' />
        </div>
      })}
    </>
  )
}
