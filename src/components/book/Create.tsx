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

    private handleInputChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    public render() {
        const { submitSuccess, loading } = this.state;
        // const classes = useStyles();
        // fields is stored onchange
        return (
            <div>
                <form className={classes.container} onSubmit={this.processFormSubmission} noValidate autoComplete="off">
                    <Card className={classes.card}>
                        <CardHeader className={classes.header} title="Add a Book" />
                        <CardContent>
                            <div>
                                <TextField
                                    id="isbn"
                                    label="ISBN"
                                    placeholder="ISBN"
                                    onChange={(e) => this.handleInputChanges(e)}
                                />
                                <TextField
                                    id="book_name"
                                    label="Book Name"
                                    placeholder="Book Name"
                                    onChange={(e) => this.handleInputChanges(e)}
                                />
                                <TextField
                                    id="company"
                                    label="Company"
                                    placeholder="Company"
                                    onChange={(e) => this.handleInputChanges(e)}
                                />
                                <TextField
                                    id="price"
                                    label="Price"
                                    placeholder="Price"
                                    onChange={(e) => this.handleInputChanges(e)}
                                />
                                <TextField
                                    id="genre_code"
                                    label="Genre Code"
                                    placeholder="Genre Code"
                                    onChange={(e) => this.handleInputChanges(e)}
                                />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button
                            className={classes.addBtn}
                            type="submit"
                            >
                            Add
                            </Button>
                        </CardActions>
                    </Card>
                </form>
            </div>
        )
    }
}

export default withRouter(Create)