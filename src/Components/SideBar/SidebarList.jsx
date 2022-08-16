import { Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import {
  useGetAllCategoriesQuery,
  useGetdAlldepartmentQuery,
} from '../../Redux/Api';
import SidebarMenu from './SidebarMenu';
import Loading from '../Loading/Loading';
function SidebarList() {
  const { data: department, isLoading } = useGetdAlldepartmentQuery();

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Nav defaultActiveKey="/home" className="flex-column">
          <h5>Shop By department</h5>

          {department.map((item) => (
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header key={item._id}>{item.name}</Accordion.Header>
                <SidebarMenu item={item} />
              </Accordion.Item>
            </Accordion>
          ))}
        </Nav>
      )}
    </>
  );
}

export default SidebarList;
