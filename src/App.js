import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

const data = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],[0,0,0,0,0,0], ]
var data2 = [data[0].reduce((a, b) => a + b, 0),data[1].reduce((a, b) => a + b, 0),data[2].reduce((a, b) => a + b, 0),data[3].reduce((a, b) => a + b, 0),data[4].reduce((a, b) => a + b, 0),data[5].reduce((a, b) => a + b, 0)]

const AppStyle = {
  'width' : '70%',
  'text-align': 'center',
  'display': 'inline-block',
}
const center = {
  'font-family': 'Noto Sans CJK KR',
  'font-style': 'normal',
  'font-weight': '400',
  'src': "styles/fonts/NotoSansKR-Light.woff2",
  'text-align': 'center',
  'vertical-align' : 'middle'
}
var cnt = -6

function App() {
  console.log(data)
  return (
    <div style = {center}>
    <div className="App" style = {AppStyle}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>1-1<br/>임유수</th>
            <th>1-2<br/>이찬희</th>
            <th>2-2<br/>최현호</th>
            <th>2-3<br/>오민근</th>
            <th>3-ε<br/>김도율</th>
            <th>3-δ<br/>박찬식</th>
          </tr>
        </thead>
        <tbody style={{'font-size':'13pt'}}>
            {
              data.map( (datum) => {
                  var a = <tr><td>[{cnt}]</td><td>{datum[0]}</td><td>{datum[1]}</td><td>{datum[2]}</td><td>{datum[3]}</td><td>{datum[4]}</td><td>{datum[5]}</td></tr>
                  cnt += 1
                  return a
                }
              )
            }
            <tr style={{'font-weight': '550','background-color':'#D3D3D3'}}><td>합계</td>
            {
              data2.map( (datum) =>{
                var b = <td style={datum>=50?{'background-color':'#77DD77'}:{}}>{datum}</td>
                return b
              })
            }
            </tr>
        </tbody>
      </Table>
    </div>
    </div>
  );
}

export default App;
