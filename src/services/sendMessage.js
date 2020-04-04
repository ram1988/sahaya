import axios from 'axios';

export default function sendToWhatsApp(payload) {
    let typesOfHelp = 'The required helps are: ';
    const category = payload.type_of_help.map(item => {
        typesOfHelp += item + ',';
    });
    typesOfHelp += '\n\n';
    const description = 'Additional Info: \n' + payload.additional_info;
    const longitude = payload.location_details ? payload.location_details.longitude : null;
    const latitude = payload.location_details ? payload.location_details.latitude : null;
    const location = payload.location_details ? payload.location_details.country : null;
    const imageURI = payload.captured_photo_uri;
    let formdata = new FormData();
    formdata.append("category", typesOfHelp)
    formdata.append("description", description)
    formdata.append("lon", longitude)
    formdata.append("lat", latitude)
    formdata.append("location", location)
    formdata.append("photo", {uri: imageURI, name: 'image.jpg', type: 'image/jpeg'})
    axios.post('http://sahaya.tangledcode.com/api/request', formdata).then(res => {
        // console.log('respone');
            // console.log(res);
    });
}