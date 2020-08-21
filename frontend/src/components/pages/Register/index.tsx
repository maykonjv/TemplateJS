import React, { ReactElement } from 'react'
import { TemplateWithoutMenu } from '../../templates'
import { Card } from '../../molecules/Card'
import { Form, Col, Button } from 'react-bootstrap';

export interface Props {
}

export default function Register({ }: Props): ReactElement {
	return (
		<TemplateWithoutMenu>
			<Card size={7} title="Create Account" footer="Have an account? Go to login" footerLink="/login">
				<Form>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridFirstName">
							<Form.Label className="small">First Name</Form.Label>
							<Form.Control className="py-4" type="text" placeholder="Enter first name" required />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridLastName">
							<Form.Label className="small">Last Name</Form.Label>
							<Form.Control className="py-4" type="text" placeholder="Enter last name" required />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label className="small">Email</Form.Label>
							<Form.Control className="py-4" type="email" placeholder="Enter email address" required />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label className="small">Password</Form.Label>
							<Form.Control className="py-4" type="password" placeholder="Enter password" required />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridConfirmPassword">
							<Form.Label className="small">Confirm Password</Form.Label>
							<Form.Control className="py-4" type="password" placeholder="Confirm password" required />
						</Form.Group>
					</Form.Row>

					<Form.Row className="mt-4">
						<Form.Group as={Col} controlId="formGridSubmit">
							<Button type="submit" block>Create Account</Button>
						</Form.Group>
					</Form.Row>
				</Form>
			</Card>
		</TemplateWithoutMenu>
	)
}
