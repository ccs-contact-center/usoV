import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la V</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Reglas ortográficas de la V</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  Las palabras que comiencen con la <b>letra ll</b> e incluyan
                  el 
                  <b>sonido B</b> en las mismas por ejemplo: llo<b>v</b>er, llu
                  <b>v</b>ia, llo<b>v</b>izna, llu<b>v</b>ioso, lla<b>v</b>e,
                  lla<b>v</b>ero, lle<b>v</b>ar, etc.
                </li>
                <li className="mt-3">
                  Los derivados y compuestos de las palabras que ya se escriban
                  con <b>la letra v</b>, por ejemplo: La<b>v</b>aplatos, Colecti
                  <b>v</b>idad.
                </li>

                <li className="mt-3">
                  Las palabras que comiencen por <b>di</b>- y a continuación
                  tengan el sonido B, como por ejemplo: di<b>v</b>agar, di
                  <b>v</b>orcio, di<b>v</b>ergente, di<b>v</b>ino, di<b>v</b>
                  isión, etc.
                </li>
              </ul>
              <ul className="centrado-fila">
                <li className="mt-3 ">
                  <span className="pRojo">
                    <b>Ojo!</b>
                  </span>
                   Excepto <b>dibujar</b> y las palabras derivadas de dibujar,
                  por ejemplo: Di<b>b</b>ujo, Di<b>b</b>ujante, di<b>b</b>ujar,
                  etc.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
