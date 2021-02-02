import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { textSpanIntersectsWithPosition } from 'typescript';
import classes from '*.module.css';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

export interface IValues {
    isbn: string,
    book_name: string,
    company: string,
    price: number,
    genre_code: number
}

export interface IFormState {
    [key: string]: any;
    values: IValues[]; // store all IValues fields
    submitSuccess: boolean;
    loading: boolean;
}

class Create extends React.Component<RouteComponentProps, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            isbn: '',
            book_name: '',
            company: '',
            price: 0,
            genre_code: 0,
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            isbn: this.state.isbn,
            book_name: this.state.book_name,
            company: this.state.company,
            price: this.state.price,
            genre_code: this.state.genre_code,
        }
        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        axios.post(`http://localhost:5000/book`, formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        ]);
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    public render() {
        const { submitSuccess, loading } = this.state;
        // fields is stored onchange
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <Card className={classes.card}>
                        <CardHeader className={classes.header} title="Add a Book" />
                        <CardContent>
                            <div>
                                <TextField
                                    id="isbn"
                                    label="ISBN"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        )
    }
}

export default withRouter(Create)