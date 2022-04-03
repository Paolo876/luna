import { useSettingsRedux } from '../../../../hooks/useSettingsRedux'
import React from 'react'

export default function ToggleHints({ classes }) {
  const { ui, toggleHintsModal } = useSettingsRedux();
  return (
    <div className={classes.inputContainer}>
        <p>Show Hints Notification:</p>
        <div className={classes.checkboxContainer}>
                <input  type="checkbox" checked={ui.isHintsShown} id="hintsToggle" onChange={() => toggleHintsModal(!ui.isHintsShown)}/>
                <label htmlFor="hintsToggle"></label>
        </div>
    </div>
  )
}
