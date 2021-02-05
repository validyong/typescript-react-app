import { assert } from 'console';
import { ReactNode } from 'react';
import Create from '../../../src/components/book/Create';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as mocha from 'mocha';
import * as chai from 'chai';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";


let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

describe('Create Conponent tests', () => { // the tests container
    it ('render test', () => {
        act(() => {
            ReactDOM.render(<Create />, container); // this is why the file extension is .tsx
        });
    })
})