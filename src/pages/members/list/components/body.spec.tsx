import * as React from 'react';
import { shallow } from 'enzyme';
import { Body } from './body';
import { Member } from '../viewModel';

describe('pages/members/list/components/body tests', () => {
    it('should render as expected when passing required properties', () => {
        // Arrange
        const props: Member[] = [
            {
                id: 1,
                name: 'test name',
                avatarUrl: 'test url',
            },
        ];
  
        // Act
        const component = shallow(
            <Body members={props} />
        );
  
        // Assert
        expect(component).toMatchSnapshot();
   });
});