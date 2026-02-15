import {useState} from 'react'
function App(){
const [state,setState] =useState(" ")
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className ="display" >
            <input type="text" value = {state}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={e => setState("")}/>
            <input type="button" value="DEL"  onClick={e => setState(state.slice(0,-1))} />
            <input type="button" value="%"  onClick={e => setState(state + e.target.value)}/>
            <input type="button" value="/"  onClick={e => setState(state + e.target.value)} className ="orange"  />
          </div>
          <div>
            <input type="button" value="7" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="8" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="9" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="*" className ="orange"  onClick={e => setState(state + e.target.value)}/>
          </div>
           <div>
            <input type="button" value="4" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="5" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="6" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="-" className ="orange" onClick={e => setState(state + e.target.value)}/>
          </div>
           <div>
            <input type="button" value="1" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="2" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="3" onClick={e => setState(state + e.target.value)} />
            <input type="button" value="+" className ="orange" onClick={e => setState(state + e.target.value)}/>
          </div>
           <div>
            <input type="button" value="0" className = "zero"  onClick={e => setState(state + e.target.value)}/>
            <input type="button" value="." onClick={e => setState(state + e.target.value)} />
            <input type="button" value="=" className ="orange" onClick={e => setState(eval(state))}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
