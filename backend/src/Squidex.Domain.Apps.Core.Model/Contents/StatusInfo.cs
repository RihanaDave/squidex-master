﻿// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

#pragma warning disable SA1313 // Parameter names should begin with lower-case letter

using Squidex.Infrastructure;

namespace Squidex.Domain.Apps.Core.Contents;

public sealed record StatusInfo(Status Status, string Color)
{
    public string Color { get; } = Guard.NotNullOrEmpty(Color);
}
