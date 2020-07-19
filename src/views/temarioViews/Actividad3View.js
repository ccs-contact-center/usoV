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
import actividad1 from '../../assets/img/usoC/usoV2.png'

import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class Actividad3View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(state) {
    super(state)
    this.state = {
      palabra1: '',
      palabra2: '',
      palabra3a: '',
      palabra3b: '',
      palabra4: '',
      palabra5a: '',
      palabra5b: '',
      palabra6: '',
      palabra7: '',
      palabra8: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.actividad3(this.state)
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
              <h2>Evaluación 3: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>3.-  Completa con b o v las palabras siguientes:</p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                  <img
                            src={actividad1}
                            style={{ width: 260 }}
                            alt="actividad1 "
                            className="img-fluid animated  bounceInRight delay-1s"
                          />
                    <Col xs="12" sm="9" md="5">
                      <Form>
                        <div
                          className="cajaA2"
                          style={{ backgroundColor: '#d5d4d8' }}
                        >
                          <div className="centrado-fila">
                            li
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra1"
                                id="palabra1"
                                value={this.state.palabra1}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ros
                          </div>

                          <div className="centrado-fila">
                            lle
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra2"
                                id="palabra2"
                                value={this.state.palabra2}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ado
                          </div>
                          <div className="centrado-fila">
                            o
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra3a"
                                id="palabra3a"
                                value={this.state.palabra3a}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            jeti
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra3b"
                                id="palabra3b"
                                value={this.state.palabra3b}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            o
                          </div>
                          <div className="centrado-fila">
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra4"
                                id="palabra4"
                                value={this.state.palabra4}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            eneficio
                          </div>
                          <div className="centrado-fila">
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra5a"
                                id="palabra5a"
                                value={this.state.palabra5a}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ien
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra5b"
                                id="palabra5b"
                                value={this.state.palabra5b}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            enido
                          </div>
                          <div className="centrado-fila">
                          retri
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra6"
                                id="palabra6"
                                value={this.state.palabra6}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            uir
                          </div>
                          <div className="centrado-fila">
                            
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra7"
                                id="palabra7"
                                value={this.state.palabra7}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            iólogo
                          </div>
                          <div className="centrado-fila">
                            
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra8"
                                id="palabra8"
                                value={this.state.palabra8}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            enir
                          </div>
                        </div>
                        <div className="centrado-fila mt-3">
                          <Button
                            color="primary"
                            onClick={this.onSave.bind(this)}
                          >
                            Enviar
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <p>{JSON.stringify(this.state)}</p> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad3View
