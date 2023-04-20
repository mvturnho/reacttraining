import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, FormGroup, FormControl } from 'react-bootstrap';

function App() {
  return (
    <div>
      <FormControl className="m-4 fullwidth" type="file" onChange={handleFile} />
    </div>
  );
}

// comments
function handleFile(event) {
  const newFile = event.target.files[0];
  if (!newFile) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (e) {
    // var content = e.target.result;
    console.log(e.target.result);
  }

  reader.readAsText(newFile, 'utf-8');
}

export default App;
