import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Input} from '../src/components/Input/input.component'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Input
        label="Логин"
        type='text'
        maxLength={5}
      ></Input>
      <Input
        label="Пароль"
        type='password'
      ></Input>
    </div>
  )
}

export default Home
