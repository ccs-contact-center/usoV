import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la V</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Las palabras acabadas en -ivoro o -ivora, veamos algunos
                  ejemplos: Carní<b>v</b>oro, Graní<b>v</b>oro, etc.
                </li>
              </ul>
              <ul className="centrado-fila text-center">
                <li>
                  <span className="pRojo">Ojo!</span> se excluye una palabra muy
                  conocida «ví<b>b</b>ora» Las palabras que empiezan por 
                  <b>villa</b>-, por ejemplo: <b>V</b>illano, <b>V</b>
                  illancicos, pueblos de España como <b>V</b>illarrobledo o 
                  <b>V</b>illar del Jucar, etc.
                </li>
              </ul>
              <ul className="mt-3 centrado-fila">
                <li>
                  <span className="pRojo">Ojo!</span>: Excepto la palabra 
                  <b>billar</b> referida al juego de mesa.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
