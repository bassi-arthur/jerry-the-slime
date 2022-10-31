import * as React from 'react'
import './style.css'

export default function DonwoloadButton(){
    return( 
      <button class="outline red" type="button">
        <div class="label">
          <span class="hover-effect"></span>
          <span class="label-text">play the free prototype</span>
        </div>
      </button>
    )
}