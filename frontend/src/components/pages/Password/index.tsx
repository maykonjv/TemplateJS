import React, { ReactElement } from 'react'
import { TemplateWithoutMenu } from '../../templates'
import { Card } from '../../molecules/Card'
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface Props {
}

export default function Password({ }: Props): ReactElement {
	return (
		<TemplateWithoutMenu>
			<Card size={5} title="Password Recovery" footer="Need an account? Sign up!" footerLink="/register">
				<Form>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Text muted>Enter your email address and we will send you a link to reset your password.</Form.Text>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label className="small">Email</Form.Label>
							<Form.Control className="py-4" type="email" placeholder="Enter email address" required />
						</Form.Group>
					</Form.Row>

					<Form.Row className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
						<Link to="/login">
							<Button size="sm" variant="link">Return to login</Button>
						</Link>
						<Button type="submit">Reset Password</Button>
					</Form.Row>
				</Form>
			</Card>
		</TemplateWithoutMenu>
	)
}
