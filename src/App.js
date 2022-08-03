import Home from './home';
import jsPDF from 'jspdf';
import {Grid, Button} from '@material-ui/core';

const App = () => {
  const generatePDF = () =>{
    var doc = new jsPDF('p', 'in', [612, 1000]);
    doc.html(document.querySelector('#content'), {
        callback: function(pdf){
            var pageCount = doc.internal.getNumberOfPages();
            pdf.deletePage(pageCount);
            pdf.save('mypdf.pdf');
        }
    });
};
  return (
    <>
      <div>
        <Home />
      </div>
      
      <Button onClick={generatePDF} type='primary'>Generate PDF</Button>
        
    </>
  )
}

export default App;