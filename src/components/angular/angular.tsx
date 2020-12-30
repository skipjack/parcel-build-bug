import React, { useEffect } from 'react'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'
import 'zone.js/dist/zone'


const Angular = props => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      enableProdMode()
    }

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.log(err))
  }, [])

  return <app-root />
}

export default Angular