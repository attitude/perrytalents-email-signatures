'use strict';

const webpageUrl = 'https://www.perrytalents.sk/'
const webpageTitle = 'perrytalents.sk'
const LOGO_WIDTH = 387
const LOGO_HEIGHT = 120
const LOGO_SCALE = 0.5

function App () {
  const [name, setName] = React.useState('')
  const [position, setPosition] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    const signature = document.getElementById('signature')
    const html = document.getElementById('html')

    if (!signature || !html) {
      return
    }

    console.log(signature.innerHTML)
    html.innerText = signature.innerHTML
  }, [
    name,
    position,
    phoneNumber,
    email,
  ])

  const onNameChange = React.useCallback((event) => setName(event.target.value))
  const onPositionChange = React.useCallback((event) => setPosition(event.target.value))
  const onPhoneNumberChange = React.useCallback((event) => setPhoneNumber(event.target.value))
  const onEmailChange = React.useCallback((event) => setEmail(event.target.value))

  const mailto = name
    ? `%22${ name.replace(' ', "%20") }%22%3c${ email }%3e`
    : email

  const phoneClean = phoneNumber
    ? phoneNumber.replace(/\s+/g, '')
    : undefined

  return (
    <div className="panels">
      <div className="panel panel-secondary">
        <form className="panel_content">
          <div className="field">
            <label>Meno: </label>
            <input
              name="name"
              placeholder="Zadaj svoje celé meno"
              value={name}
              onChange={onNameChange}
            />
          </div>

          <div className="field">
            <label>Pozícia: </label>
            <input
              name="position"
              placeholder="Zadaj svoju pozíciu, napr. koordinátor"
              value={position}
              onChange={onPositionChange}
            />
          </div>

          <div className="field">
            <label>Tel. číslo: </label>
            <input
              name="phone-number"
              placeholder="Zadaj telefónne číslo"
              value={phoneNumber}
              onChange={onPhoneNumberChange}
            />
          </div>

          <div className="field">
            <label>email: </label>
            <input
              name="email"
              placeholder="Zadaj svoj@email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
        </form>
      </div>
      <div className="panel">
        <p class="hint">
          1. Zadaj svoje údaje do formulára, niektoré môžeš vynechať<br />
          2. Klikni dovnútra čiarkovanej plochy<br />
          3. Vyber všetko (Cmd + A / Ctr + A)<br />
          4. Skopíruj označený obsah (Cmd + C / Ctrl + C)<br />
          5. Vlož skopírovaný obsah do podpisu (<a
            target="_blank"
            href="https://support.office.com/en-us/article/Create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"
          >Outlook</a>, <a
            target="_blank"
            href="https://www.lifewire.com/use-signatures-in-windows-10-mail-4123784"
          >Win 10</a>, <a
            target="_blank"
            href="https://support.apple.com/en-gb/guide/mail/mail11943/mac"
          >Mac</a>)</p>
        <div className="select-here">
          <div id="signature" contentEditable={true} className="panel_content">
            <p>S pozdravom</p>
            <p style={{lineHeight: '1.5em' }}>
              {name}
              {position && <React.Fragment><br /><i style={{ color: '#777777' }}>{position}</i><br /></React.Fragment>}
              <span style={{ fontSize: '0.9em' }}>
                {email && <React.Fragment>
                  <a style={{color: '#777777', textDecoration: 'none' }} href={`mailto:${mailto}`}>{email}</a><br />
                </React.Fragment>}
                {phoneClean && <React.Fragment>
                  <a style={{color: '#777777', textDecoration: 'none' }} href={`tel:${phoneClean}`}>{phoneNumber}</a><br />
                </React.Fragment>}
              </span>
            </p>

            <table border="0" cellPadding="0" cellSpacing="0"><tbody><tr>
              <td><a
                style={{ verticalAlign: 'bottom' }}
                href={webpageUrl}
                ><img
                  style={{ verticalAlign: 'middle' }}
                  src="data:image/png;base64,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"
                  height={LOGO_HEIGHT * LOGO_SCALE}
                  width={LOGO_WIDTH * LOGO_SCALE}
                  alt={webpageTitle}
                  /></a></td>
            </tr></tbody></table>
          </div>
        </div>
        <hr />
        <p class="hint">PS: Podpisy pre Gmail cez web majú bug a nefungujú, skúste prosím používať Gmail s inou appkou, kde je možné podpis zadať priamo nižšie uvedené HTML ako napr.:</p>
        <ul class="hint">
          <li>
            <a
              target="_blank"
              href="https://sparkmailapp.com/"
            >Spark pre iOS, Android, Mac</a>; návod na <a
              target="_blank"
              href="https://sparkmailapp.com/how-to-add-signature-ios"
            >nastavenie podpisu</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.thunderbird.net/"
            >Thunderbird pre Mac, Win a Linux</a>; návod na <a
              target="_blank"
              href="https://support.mozilla.org/en-US/kb/signatures#w_html-signatures"
            >nastavenie podpisu</a>
          </li>
        </ul>
        <textarea id="html" class="select-here"></textarea>
      </div>
    </div>
  )
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);