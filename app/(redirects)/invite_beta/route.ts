import { NextResponse } from 'next/server';
import { INVITE_BETA } from '../../../constants';
 
export async function GET() {
    return NextResponse.redirect(INVITE_BETA);
}