import React, { ReactElement, useContext } from 'react'
import { TemplateWithoutMenu } from '../../templates'
import { Card } from '../../molecules/Card'
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginContext } from './index.context';

export interface Props {
}

export default function Login({ }: Props): ReactElement {
	const { isLoading, onchange, handleSubmit } = useContext(LoginContext)

	return (
		<TemplateWithoutMenu>
			<Card size={5} title="Login" footer="Need an account? Sign up!" footerLink="/register">
				<Form>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label className="small">Email</Form.Label>
							<Form.Control className="py-4" type="email" placeholder="Enter email address" required onChange={onchange} />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label className="small">Password</Form.Label>
							<Form.Control className="py-4" type="password" placeholder="Enter password" required onChange={onchange} />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridRemenderPassword">
							<Form.Check type="checkbox" label="Remember password" custom />
						</Form.Group>
					</Form.Row>

					<Form.Row className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
						<Link to="/password">
							<Button size="sm" variant="link">Forgot Password?</Button>
						</Link>
						<Button onClick={!isLoading ? handleSubmit : () => { }} disabled={isLoading}>
							{
								isLoading
									? <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
									: 'Login'
							}
						</Button>
					</Form.Row>
				</Form>
			</Card>
		</TemplateWithoutMenu>
	)
}
