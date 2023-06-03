import { NextResponse } from 'next/server';
import { INVITE } from '../../../constants';
 
export async function GET() {
    return NextResponse.redirect(INVITE);
}