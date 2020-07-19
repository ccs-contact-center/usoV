import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import actividad1 from '../../assets/img/usoC/usoV3.png'

import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(state) {
    super(state)
    this.state = {
      checkboxAcierto1: '',
      checkboxAcierto2: '',
      checkboxAcierto3: '',
      checkboxAcierto4: '',
      checkboxAcierto5: '',
      checkboxAcierto6: '',
      checkboxAcierto7: '',
      checkboxAcierto8: '',
      checkboxAcierto9: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.checked,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.actividad1(this.state)
      alert('Se guardo la encuesta número ' + respuesta[0].id)
    } catch (err) {
      console.log('loggea si hay un error')
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación 1: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>
                    1.- Atrévete y tacha las palabras que contengan la letra C
                    mal escrita.
                  </p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                    <Col xs="12" sm="9" md="8">
                      <Form>
                        <div
                          className="cajaA2 centrado-fila"
                          style={{ backgroundColor: '#d5d4d8' }}
                        >
                          <img
                            src={actividad1}
                            style={{ width: 260 }}
                            alt="actividad1 "
                            className="img-fluid animated  bounceInRight delay-1s"
                          />
                          <FormGroup
                            tag="fieldset"
                            style={{ marginBottom: '0px' }}
                          >
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Enbuelto

                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto1"
                                      id="checkboxAcierto1"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Revista</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto2"
                                      id="checkboxAcierto2"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Revuelto</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto3"
                                      id="checkboxAcierto3"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Aberiado</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto4"
                                      id="checkboxAcierto4"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Abalancha</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto5"
                                      id="checkboxAcierto5"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Vivencia</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto6"
                                      id="checkboxAcierto6"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Aveztrus</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto7"
                                      id="checkboxAcierto7"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Favorito</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto8"
                                      id="checkboxAcierto8"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>

                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Avispa</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="checkboxAcierto9"
                                      id="checkboxAcierto9"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                          </FormGroup>
                        </div>
                        <div className="centrado-fila mt-3">
                          <Button
                           color="primary"
                           onClick={this.onSave.bind(this)}
                           >Enviar</Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
               <p>{JSON.stringify(this.state)}</p> 
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
