import React from 'react';
import api from '../services/api';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import RenderFlatListComponent from '../components/RenderFlatListComponent';
class BuscarMusicaScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            listaDeMusicas: [],
            quantidaDeMusicas: undefined,
            showLoading: false
        }

        this.pegarTextoDigitado = this.pegarTextoDigitado.bind(this);
        this.getListaDeMusicas = this.getListaDeMusicas.bind(this);
    }

    getListaDeMusicas = () => {
        const nome = this.state.nome.replace(" ", "+")
        console.log("nome ", nome)
        this.setState({
            showLoading: true
        })
        api.getMusicas(nome)
            .then((response) => {
                this.setState({
                    quantidaDeMusicas: response.data.resultCount,
                    listaDeMusicas: response.data.results,
                    showLoading: false
                })
                console.log("Lista de Musica ", this.state.listaDeMusicas)
            })
            .catch((error) => {
                this.setState({
                    showLoading: false
                })
                console.log("Erro ao procurar Lista ", error)
            })
    }
    pegarTextoDigitado = (texto) => {
        this.setState({ nome: texto })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ViewDoTextInput}>
                    <TextInput
                        placeholder='Pesquisar...'
                        style={styles.styleDoTextInput}
                        onChangeText={(texto) => this.pegarTextoDigitado(texto)}
                        value={this.state.nome}
                    />
                </View>

                <View style={styles.viewDoBotao}>
                    <TouchableOpacity onPress={this.getListaDeMusicas} style={styles.styleDoBotao}>
                        <View>
                            <Text style={styles.textDobotao}>Buscar músicas</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewActivityIndicator}>
                    {this.state.showLoading && <ActivityIndicator size="large" color="#0000ff" />}
                </View>

                <View style={styles.viewDasMsg}>
                    {this.state.quantidaDeMusicas > 0 &&
                        <Text style={styles.textEncontradoMusicas}>Total de músicas encontradas: {this.state.quantidaDeMusicas}</Text>
                    }
                    {this.state.quantidaDeMusicas === 0 &&
                        <Text style={styles.textNaoEncontradoMusicas}>Total de músicas encontradas: {this.state.quantidaDeMusicas}</Text>
                    }
                </View>

                <View style={styles.containerDoRenderItem}>
                    <RenderFlatListComponent listaDeMusicas={this.state.listaDeMusicas} />
                </View>

            </View>

        );
    }
}
export default BuscarMusicaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF'
    },
    ViewDoTextInput: {
        marginTop: 30,
    },
    styleDoTextInput: {
        height: 40,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 3
    },
    viewDoBotao: {
        alignItems: 'center'
    },
    styleDoBotao: {
        marginTop: 30,
        backgroundColor: '#DD0099',
        borderRadius: 100,
        alignItems: 'center',
        height: 40,
        width: 200,
        justifyContent: 'center',
        elevation: 4
    },
    textDobotao: {
        fontSize: 15,
        color: '#FFF'
    },
    viewActivityIndicator: {
        left: '50%',
        top: '50%',
        position: 'absolute'
    },
    viewDasMsg: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20
    },
    textEncontradoMusicas: {
        fontSize: 20,

    },
    textNaoEncontradoMusicas: {
        fontSize: 20,
    },
    containerDoRenderItem: {
        flex:1
    }
})