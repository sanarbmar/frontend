import image from 'rollup-plugin-image';

export default {
  input: '../assets/images/mazainfo.png', // Ruta del archivo de entrada principal
  output: {
    file: 'src/Components/Benefits.jsx', // Ruta del archivo de salida
    format: 'png' // Formato del módulo (puedes cambiarlo según tus necesidades)
  },
  plugins: [
    image() // Plugin para manejar archivos de imagen
  ]
};