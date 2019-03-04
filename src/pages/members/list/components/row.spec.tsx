import * as React from 'react';
import { shallow } from 'enzyme';
import { Member } from '../viewModel';
import { Row } from './row';

describe('pages/members/list/components/row tests', () => {
    it('should render as expected when passing one member', () => {
        // Arrange
        const props = {
            id: 1,
            name: 'test name',
            avatarUrl: 'test url',
        };
        
  
        // Act
        const component = shallow(
            <Row member={props} />
        );
  
        // Assert
        expect(component).toMatchSnapshot();
   });
});