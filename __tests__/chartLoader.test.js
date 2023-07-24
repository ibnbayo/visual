import '../jest.setup'
import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import ChartLoader from '../app/components/chartLoader/chartLoader'; 



// chartLoader.test.js 

beforeEach(() => {
  jest.resetModules(); 
});

describe('ChartLoader', () => {

  it('renders a div with the correct chart ID', () => {
    const id = 'chart-1';
    render(<ChartLoader chartId={id} />);
    
    expect(document.getElementById(id)).toBeInTheDocument();
  });

  it('calls the chart constructor with provided props', () => {
    
    const data = [];
    const id = 'chart-1';
    const x = 'colX'; 
    const y = 'colY';

    const mockChart = jest.fn();
    jest.mock('@antv/g2/lib/geometry/label/util/createWorker', () => ({
      Chart: mockChart
    }));

    render(<ChartLoader 
      data={data}
      chartId={id}
      columnXname={x}
      columnYname={y}
    />);

    expect(mockChart).toHaveBeenCalledWith({
      container: id,
      autoFit: true,
      height: 500
    });

  });
  
  

});