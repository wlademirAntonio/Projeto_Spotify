import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

const Player = ({duration, randomIdFromArtist, randomId2FromArtist, audio}) => {
    const audioPlayer = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()

        setIsPlaying(!isPlaying)
    }
    // console.log(audioPlayer.current.play())

    return (
        <div className='player'>
            <div className="player__controllers">
                <Link to={`/song/${randomIdFromArtist}`}><FontAwesomeIcon className='player__icon' icon={faBackwardStep} /></Link>

                <FontAwesomeIcon className='player__icon player__icon--play' icon={isPlaying ? faCirclePause : faCirclePlay} onClick={() => playPause()} />

                <Link to={`/song/${randomId2FromArtist}`}><FontAwesomeIcon className='player__icon' icon={faForwardStep} /></Link>
            </div>

            <div className="player__progress">
                <p>00:00</p>

                <div className="player__bar">
                    <div className="player__bar-progress"></div>
                </div>
                
                <p>{duration}</p>
            </div>

            <audio ref={audioPlayer} src={audio}></audio>
        </div>
    )
}

export default Player