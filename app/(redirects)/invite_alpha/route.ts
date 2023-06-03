import { NextResponse } from 'next/server';
import { INVITE_ALPHA } from '../../../constants';
 
export async function GET() {
    return NextResponse.redirect(INVITE_ALPHA);
}