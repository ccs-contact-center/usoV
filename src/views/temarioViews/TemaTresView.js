import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la V</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Las palabras que contengan el <b>sonido B</b> después de las 
                  <b>consonantes b o d</b> , como por ejemplo: Ad<b>v</b>erbio,
                  Ob<b>v</b>io, Ad<b>v</b>ertencia.
                </li>
                <li className="mt-3">
                  Las palabras que comienzan por los sufijos <b>vice</b>-,{' '}
                  <b>viz</b>-, <b>vi</b>-, por ejemplo nos encontraremos 
                  <b>v</b>icepresidenta, <v>v</v>iceversa, <b>v</b>izconde.
                </li>
                <li className="mt-3">
                  Las palabras que contienen el sonido B después de <b>ol</b>,
                  por ejemplo Ol<b>v</b>idar, Ol<b>v</b>ido, Devol<b>v</b>er.
                </li>
                <li className="mt-3">
                  Las palabras que empiezan por <b>eva</b>-, <b>eve</b>-,{' '}
                  <b>evi</b>-, <b>evo</b>- por ejemplo: E<b>v</b>itar, E<b>v</b>
                  olución, E<b>v</b>aporar.
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
